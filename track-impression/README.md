# Track Impression Examples

These examples demonstrate how to handle different responses from the `ASP.trackImpression` function. The scripts now include a check to ensure the HTTP response status is `200` and a `.catch()` block to log any errors that occur during the request.

## Approved Status

The `approved.html` example shows how to handle an "approved" status. When the `trackImpression` function returns a response with a status of "approved", a message is inserted into the HTML to indicate that the impression was successful, along with the transaction ID.

## Rejected Status

The `rejected.html` example shows how to handle a "rejected" status. When the `trackImpression` function returns a response with a status of "rejected", a message is inserted into the HTML to indicate that the impression was rejected, along with the reason.
