
/* This example queries items in the Orders table. The table has a partition key and sort key (Artist and SongTitle), but this query only specifies the partition key value. It returns song titles by the artist named "No One You Know". */

 var params = {
  ExpressionAttributeValues: {
   ":v1": {
     O: "Orders"
    }
  }, 
  KeyConditionExpression: "Order = :v1", 
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
        O: "Orders"
       }
     }
    ], 
    ScannedCount: 2
   }
   */
 });
