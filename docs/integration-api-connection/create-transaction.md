---
sidebar_position: 3
---

# Create Transaction

![Diagram](/img/create-transaction.png)

You can find the documentation of the API Flow connection in here:
**[API Documentation (Swagger)](https://staging-partnership.superyou.co.id/partner/docs)**

## Creating a new Transaction

This feature enables you to create a new transaction using the minimum data required and get quotation URL as the result.

**Endpoint: **

`{base-url}/api/v1/transactions/create/{user-key}`

**Payload:**

| Key      | Rule | Type | Description | Example | 
| ----------- | ----------- | ----------- | ----------- | ----------- |
| **product_slug** | _required_ | _string_ | Obtainable via **[Getting the Product](./get-product-detail#getting-the-product)** | super-care-protection
| **product_code** | _required_ | _string_ | Obtainable via **[Getting the Product](./get-product-detail#getting-the-product)** | DSCPR11
| **product_plan_code** | _required_ | _string_ | Obtainable via **[Getting the Product](./get-product-detail#getting-the-product)** | silver-plan-tanpa-perlindungan-covid-19
| **holder_name** | _required_ | _string_ | Policy Holder Name | John Doe
| **holder_gender** | _required_ | _string_ | Policy Holder Gender | **MALE** or **FEMALE**
| **holder_dob** | _required_ | _string_ | Policy Holder Date of Birth | 21/06/1998 - **dd/mm/yyyy**
| **holder_email** | _required_ | _string_ | Policy Holder Email Address | johndoe@email.com
| **holder_mobile_number** | _required_ | _string_ | Policy Holder Mobile Number | 08123456789
| **insured_for** | _required_ | _string_ | Insured Relationship | **SELF, MOTHER, FATHER, BROTHER, SISTER, DAUGHTER, SON, WIFE, HUSBAND**
| **insured_name** | _required_ | _string_ | Insured Name | Jane Doe
| **insured_dob** | _required_ | _string_ | Insured Date of Birth | 21/06/1998 - **dd/mm/yyyy**
| **insured_id_card_number** | _optional_ | _string_ | Insured Citizen ID Card Number | 1234123412341234
| **beneficiary_status** | _optional_ | _string_ | Beneficiary Relationship | **SELF, MOTHER, FATHER, BROTHER, SISTER, DAUGHTER, SON, WIFE, HUSBAND**
| **channel** | _optional_ | _string_ | Insurance Channel | partnership
| **is_assist** | _optional_ | _string_ | Is Assist | _true_ or _false_
| **rider_codes** | _optional_ | _string_ | Obtainable via **[Getting the Product](./get-product-detail#getting-the-product)** | DCPR1
| **file_url** | _optional_ | _string_ | File URL | -
| **transaction_type** | _optional_ | _string_ | Type of Transaction | **single-creation**
| **origin_flag** | _required_ | _string_ | Origin Source of Request Quotation | **app, iframe, redirect**
| **redirect_url** | _optional_ | _string_ | Redirect URL for after payment success | Optional (Required if you chose the origin_flag to be "redirect")
| **custom_id** | _optional_ | _string_ | Custom ID from Partner | -

```json title="body"
{
  "product_slug": "string",
  "product_code": "string",
  "product_plan_code": "string",
  "holder_name": "string",
  "holder_gender": "string",
  "holder_dob": "string",
  "holder_email": "string",
  "holder_mobile_number": "string",
  "insured_for": "SELF",
  "insured_name": "string",
  "insured_dob": "string",
  "beneficiary_status": "string",
  "channel": "partnership",
  "origin_flag": "app",
  "redirect_url": "string",
  "is_assist": true,
  "rider_codes": "string",
  "insured_id_card_number": "string",
  "file_url": "string",
  "upload_id": "string",
  "transaction_type": "single-creation",
  "custom_id": "string"
}
```

**Response:**
```json title="success"
{
    "data": {
        "new_token": "token-from-superyou",
        "redirect_to": "quotation-url",
        "with_registered": 1,
        "user_id": 1,
        "transaction_id": "transaction-id-generated",
        "custom_id": null,
        "product_slug": "super-care-protection",
        "product_code": "DSCPR11",
        "product_plan_code": "silver-plan-tanpa-perlindungan-covid-19",
        "status": "awaiting-payment"
    },
    "meta": {
        "copyright": "Copyright 2021 PT Asuransi Jiwa Sequis Life",
        "locale": "id"
    },
    "jsonapi": {
        "version": "1.0"
    }
}
```
```json title="failed - schema failed"
{
  "detail": "1 validation error for Schema\ninsured_id_card_number\n  ensure this value has at least 16 characters (type=value_error.any_str.min_length; limit_value=16)"
}
```
```json title="failed - validation failed"
{
    "transaction_id": "transaction-id-generated",
    "status": "validation-failed",
    "validation_message": "Product Code and Product Plan Code doesn't belong to the Product Slug"
}
```