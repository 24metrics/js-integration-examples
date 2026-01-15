# [24metrics](https://24metrics.com) JavaScript SDK

<!-- vim-markdown-toc GFM -->

* [Introduction](#introduction)
* [Installation](#installation)
* [General Usage](#general-usage)
  * [Creating Clicks](#creating-clicks)
  * [Creating Impressions](#creating-impressions)
  * [Creating Conversions](#creating-conversions)
  * [Creating Conversions using Transaction ID from Cookie](#creating-conversions-using-transaction-id-from-cookie)
* [Examples](#examples)
  * [Detecting Fraud in the Response](#detecting-fraud-in-the-response)
  * [Creating Clicks](#creating-clicks-1)
  * [Creating Impressions](#creating-impressions-1)
  * [Creating Conversions](#creating-conversions-1)
  * [Block Rejected User when Rejected](#block-rejected-user-when-rejected)

<!-- vim-markdown-toc -->

## Introduction

The Javascript SDK is a library that allows you to track impressions, clicks and conversions from your website and send them to our system. This SDK is designed to be used in conjunction with our system to track the performance of your ads and campaigns.

## Installation

To install the Javascript SDK, you need to include the following script tag in the `<head>` section of your website:

```html
<script src="https://cdn.fstrk.net/lib/index.js"></script>
```

## General Usage

### Creating Clicks

**Basic Function `ASP.pageClick({}`**- This is the one seen in the Integration Settings UI. This is used for general purposes. Use this function to automatically handle the redirection of *Approved Clicks Redirect URL* if approved or the *Redirect to Fallback URL* of the *Blocking Strategy for Fraud Clicks* if rejected.  See [React Example Webapp](./react-example).


**Advanced Function `ASP.trackClick({})`** - Use this function to create a Click that may require more complex handling by using the response to handle approved/rejected event.

**Reading the Advanced Function Response**

- If the response has a `redirect_url` field with value, you can use that to manually redirect the user.
- If the click is approved or monitoring mode is on in the Filter Group that is used, the value of the `redirect_url` will be the *Approved Clicks Redirect URL* if defined. If the click is rejected and monitoring mode is off, the value of the `redirect_url` will be the *Redirect to Fallback URL* if chosen as the *Block Strategy for Fraud Clicks*.
- If the click is rejected and monitoring mode is off and the *Blocking Strategy for Fraud Clicks* is Show Blank Page, the user will see a Blank page.

### Creating Impressions

`ASP.trackImpression({})` - Use this function to create an Impression and use the response to handle approved/rejected event.

### Creating Conversions

`ASP.trackConversion({})` - Use this function to create an Conversion and use the response to handle approved/rejected event.

### Creating Conversions using Transaction ID from Cookie

Tracking conversions using `transaction_id` is recommended for tracking conversions if you are using our system Click API.
To track conversions with the transaction ID from the click API response, you need to call the `ASP.trackConversion` function with the following parameters:
If the `transaction_id` parameter is not provided, the SDK will try to look for the transaction ID from the domain cookies.

```javascript
ASP.trackConversion({
  integrationID: '{integrationID}',
  transaction_id: '{transactionID}', // Optional
}).then(function(response) {
  console.log(response); // {"status": 200, "data": {"status": "processing"}}
})
```
## Examples

You must pass these required parameters to each function:

```javascript
ASP.trackClick({
  integrationID: '{integrationID}',
  offer: '{offer}',
  publisher: '{publisher}'
});
```

You can also pass additional parameters to each function to track custom data:

```javascript
ASP.trackClick({
  integrationID: '{integrationID}',
  offer: '{offer}',
  publisher: '{publisher}',
  sub_id: '{sub_id}',
  sub_id2: '{sub_id2}',
  sub_id3: '{sub_id3}',
  sub_id4: '{sub_id4}',
  sub_id5: '{sub_id5}',
  sub_id6: '{sub_id6}'
});
```

You can also read the values from the query parameters of the page URL using the `ASP.getQueryParam` function:

```javascript
// Example URL: https://example.com/?offer=123&publisher=456
ASP.trackClick({
  integrationID: '{integrationID}',
  offer: ASP.getQueryParam('offer'), // This will be replaced with '123'
  publisher: ASP.getQueryParam('publisher') // This will be replaced with '456'
});
```

### Detecting Fraud in the Response

Each function returns a `Promise` that resolves with the response data from our system.

If our system detects fraud, the response will include a `status` field with the value `rejected` and `reason` field with the reason for the rejection.

```javascript
ASP.trackClick({
  integrationID: '{integrationID}',
  offer: '{offer}',
  publisher: '{publisher}'
}).then(function(response) {
  console.log(response); // {"status": 200, "data":{"status": "rejected", "reason": "VPN"}}
});
```

### Creating Clicks

To track clicks, you need to call the `ASP.trackClick` function with the following parameters:

```javascript
ASP.trackClick({
  integrationID: '{integrationID}',
  offer: '{offer}',
  publisher: '{publisher}'
}).then(function(response) {
  console.log(response); // {"status": 200, "data": {"status": "approved", "transaction_id": "01HVMM5SAS879C0AQZ295VEVN9"}}
});
```

### Creating Impressions

To track impressions, you need to call the `ASP.trackImpression` function with the following parameters:

```javascript
ASP.trackImpression({
  integrationID: '{integrationID}',
  offer: '{offer}',
  publisher: '{publisher}'
}).then(function(response) {
  console.log(response); // {"status": 200, "data": {"status": "approved", "transaction_id": "01HVMM5SAS879C0AQZ295VEVN9"}}
});
```

### Creating Conversions

To track conversions, you need to call the `ASP.trackConversion` function with the following parameters:

```javascript
ASP.trackConversion({
  integrationID: '{integrationID}',
  offer: '{offer}',
  publisher: '{publisher}',
  revenue: '{revenue}',
  payout: '{payout}'
}).then(function(response) {
  console.log(response); // {"status": 200, "data": {"status": "approved", "transaction_id": "01HVMM5SAS879C0AQZ295VEVN9"}}
})
```


### Block Rejected User when Rejected

How it works:
- If the response code is 200 and the status is not approved. The user will see a page with "Invalid Click".
- If the response code is other than 200, nothing else happens.
- If the SDK fails to execute for some reason such as: server unavailable, client network issue, or invalid usage of the SDK or API, the page will load normally.

```javascript
ASP.trackClick({
    integrationID: 'REPLACE',
    advertiser: 'REPLACE',
    offer: 'REPLACE',
    publisher: 'REPLACE'
}).then(function(response) {
    console.log(response);
    // Check if response was successful (status 200) but not approved
    if (response.status === 200 && response.data.status !== "approved") {
        // Clear the page content
        document.body.innerHTML = '<p>Invalid click</p>';
    }
}).catch(function(error) {
    // If there's an error, we don't do anything as per requirements
    console.error("Error in trackClick:", error);
    // Page loads normally if there's an error
});
```

