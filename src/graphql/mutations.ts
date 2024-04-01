/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createProduct = /* GraphQL */ `mutation CreateProduct(
  $input: CreateProductInput!
  $condition: ModelProductConditionInput
) {
  createProduct(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateProductMutationVariables,
  APITypes.CreateProductMutation
>;
export const updateProduct = /* GraphQL */ `mutation UpdateProduct(
  $input: UpdateProductInput!
  $condition: ModelProductConditionInput
) {
  updateProduct(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateProductMutationVariables,
  APITypes.UpdateProductMutation
>;
export const deleteProduct = /* GraphQL */ `mutation DeleteProduct(
  $input: DeleteProductInput!
  $condition: ModelProductConditionInput
) {
  deleteProduct(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteProductMutationVariables,
  APITypes.DeleteProductMutation
>;
export const createCartProduct = /* GraphQL */ `mutation CreateCartProduct(
  $input: CreateCartProductInput!
  $condition: ModelCartProductConditionInput
) {
  createCartProduct(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateCartProductMutationVariables,
  APITypes.CreateCartProductMutation
>;
export const updateCartProduct = /* GraphQL */ `mutation UpdateCartProduct(
  $input: UpdateCartProductInput!
  $condition: ModelCartProductConditionInput
) {
  updateCartProduct(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateCartProductMutationVariables,
  APITypes.UpdateCartProductMutation
>;
export const deleteCartProduct = /* GraphQL */ `mutation DeleteCartProduct(
  $input: DeleteCartProductInput!
  $condition: ModelCartProductConditionInput
) {
  deleteCartProduct(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteCartProductMutationVariables,
  APITypes.DeleteCartProductMutation
>;
export const createCart = /* GraphQL */ `mutation CreateCart(
  $input: CreateCartInput!
  $condition: ModelCartConditionInput
) {
  createCart(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateCartMutationVariables,
  APITypes.CreateCartMutation
>;
export const updateCart = /* GraphQL */ `mutation UpdateCart(
  $input: UpdateCartInput!
  $condition: ModelCartConditionInput
) {
  updateCart(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateCartMutationVariables,
  APITypes.UpdateCartMutation
>;
export const deleteCart = /* GraphQL */ `mutation DeleteCart(
  $input: DeleteCartInput!
  $condition: ModelCartConditionInput
) {
  deleteCart(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteCartMutationVariables,
  APITypes.DeleteCartMutation
>;
