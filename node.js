datapack=[];
    item = {
        TableName: ddbTable,
        IndexName: "cEmailIndex",
        KeyConditionExpression : "aws = :e AND begins_with ( cEmail, :t )",
        ExpressionAttributeValues: {
            ":t"    :   search,
            ":e"    :   aws
        },
        ProjectionExpression: "Id,FirstName,LastName,cEmail",
    };
    docClient.query(item, onScan);
    function onScan(err, data) {
        if (err) {
            console.error("Unable to scan the table. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            datapack = datapack.concat(data.Items);
            if (typeof data.LastEvaluatedKey != "undefined") {
                item.ExclusiveStartKey = data.LastEvaluatedKey;
                docClient.query(item, onScan);
            } else {
                // console.log(JSON.stringify(datapack));
                res.json(datapack);
            }
        }
    }
