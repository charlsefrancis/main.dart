let datapack=[];
item = {
        TableName: orderTable,
        FilterExpression: "aws = :e AND begins_with ( Id, :t )",
        ExpressionAttributeValues: {
            ":t"    :   "contact",
            ":e"    :   aws
        },
        ProjectionExpression: "Id,FirstName,LastName,cEmail",
    };
    docClient.scan(item, onScan);
    function onScan(err, data) {
        if (err) {
            console.error("Unable to scan the table. Error JSON:", JSON.stringify(err, null, 2));
        } else {        
            datapack = datapack.concat(data.Items);
            });
            if (typeof data.LastEvaluatedKey != "undefined") {
                item.ExclusiveStartKey = data.LastEvaluatedKey;
                docClient.scan(item, onScan);
            } else {
                res.json(datapack);
            }
        }
    }
