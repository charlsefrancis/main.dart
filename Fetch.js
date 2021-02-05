
/* This example queries items in the Orders table. */

 var params = {
  ExpressionAttributeValues: {
   ":v1": {
     O: "OrderNumber"
    }
  }, 
  KeyConditionExpression: "OrderStatus= :v1", 
  ProjectionExpression: "Stickers,quantities,ShippingAddress,ShippingType,AmountBilled,PaymentMethod,TrackingNumber,DeliveryStatus,FulfillmentStatus", 
  TableName: "Orders"
 };
 dynamodb.query(params, function(err, data) {
   if (err) console.log(err, err.stack); // an error occurred
   else     console.log(data);           // successful response
   /*
   data = {
    ConsumedCapacity: {
    }, 
    Count: 2, 
    Items: [
       {
      "Stickers": {
        O: "OrderNumber"
       }
     }
    ], 
    ScannedCount: 2
   }
   */
 });
