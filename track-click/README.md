# Track Click Examples

These examples demonstrate how to handle different responses from the `ASP.trackClick` function. The scripts now include a check to ensure the HTTP response status is `200` and a `.catch()` block to log any errors that occur during the request.

## Approved Status

The `approved.html` example shows how to handle an "approved" status. When the `trackClick` function returns a response with a status of "approved", a message is inserted into the HTML to indicate that the click was successful, along with the transaction ID.

## Rejected Status

The `rejected.html` example shows how to handle a "rejected" status. When the `trackClick` function returns a response with a status of "rejected", a message is inserted into the HTML to indicate that the click was rejected, along with the reason.

## Get Fields

The `get-fields.html` example demonstrates how to use the `fields` parameter to request additional data in the response from the `trackClick` function. In this case, it requests the `fingerprint` and then displays the transaction ID, fingerprint, reason, and status in the HTML.
