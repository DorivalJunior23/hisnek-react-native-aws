/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateProduct = /* GraphQL */ `subscription OnCreateProduct($filter: ModelSubscriptionProductFilterInput) {
  onCreateProduct(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateProductSubscriptionVariables,
  APITypes.OnCreateProductSubscription
>;
export const onUpdateProduct = /* GraphQL */ `subscription OnUpdateProduct($filter: ModelSubscriptionProductFilterInput) {
  onUpdateProduct(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateProductSubscriptionVariables,
  APITypes.OnUpdateProductSubscription
>;
export const onDeleteProduct = /* GraphQL */ `subscription OnDeleteProduct($filter: ModelSubscriptionProductFilterInput) {
  onDeleteProduct(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteProductSubscriptionVariables,
  APITypes.OnDeleteProductSubscription
>;
export const onCreateCartProduct = /* GraphQL */ `subscription OnCreateCartProduct(
  $filter: ModelSubscriptionCartProductFilterInput
) {
  onCreateCartProduct(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCartProductSubscriptionVariables,
  APITypes.OnCreateCartProductSubscription
>;
export const onUpdateCartProduct = /* GraphQL */ `subscription OnUpdateCartProduct(
  $filter: ModelSubscriptionCartProductFilterInput
) {
  onUpdateCartProduct(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCartProductSubscriptionVariables,
  APITypes.OnUpdateCartProductSubscription
>;
export const onDeleteCartProduct = /* GraphQL */ `subscription OnDeleteCartProduct(
  $filter: ModelSubscriptionCartProductFilterInput
) {
  onDeleteCartProduct(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCartProductSubscriptionVariables,
  APITypes.OnDeleteCartProductSubscription
>;
export const onCreateCart = /* GraphQL */ `subscription OnCreateCart($filter: ModelSubscriptionCartFilterInput) {
  onCreateCart(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCartSubscriptionVariables,
  APITypes.OnCreateCartSubscription
>;
export const onUpdateCart = /* GraphQL */ `subscription OnUpdateCart($filter: ModelSubscriptionCartFilterInput) {
  onUpdateCart(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCartSubscriptionVariables,
  APITypes.OnUpdateCartSubscription
>;
export const onDeleteCart = /* GraphQL */ `subscription OnDeleteCart($filter: ModelSubscriptionCartFilterInput) {
  onDeleteCart(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCartSubscriptionVariables,
  APITypes.OnDeleteCartSubscription
>;
