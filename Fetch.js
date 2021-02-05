
/* This example queries items in the Music table. The table has a partition key and sort key (Artist and SongTitle), but this query only specifies the partition key value. It returns song titles by the artist named "No One You Know". */

 var params = {
  ExpressionAttributeValues: {
   ":v1": {
     S: "No One You Know"
    }
  }, 
  KeyConditionExpression: "Artist = :v1", 
  ProjectionExpression: "SongTitle", 
  TableName: "Music"
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
      "SongTitle": {
        S: "Call Me Today"
       }
     }
    ], 
    ScannedCount: 2
   }
   */
 });
