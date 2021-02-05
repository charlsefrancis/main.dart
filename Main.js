var params = {
  TableName: 'Orders', /* required */
  AttributesToGet: [
    '',
    /* more items */
  ],
  ConditionalOperator: AND | OR,
  ConsistentRead: true || false,
  ExclusiveStartKey: {
    '<AttributeName>': { /* AttributeValue */
      B: Buffer.from('...') || 'STRING_VALUE' /* Strings will be Base-64 encoded on your behalf */,
      BOOL: true || false,
      BS: [
        Buffer.from('...') || 'STRING_VALUE' /* Strings will be Base-64 encoded on your behalf */,
        /* more items */
      ],
      L: [
        /* recursive AttributeValue */,
        /* more items */
      ],
      M: {
        '<AttributeName>': /* recursive AttributeValue */,
        /* '<AttributeName>': ... */
      },
      N: 'STRING_VALUE',
      NS: [
        'STRING_VALUE',
        /* more items */
      ],
      NULL: true || false,
      S: 'STRING_VALUE',
      SS: [
        'STRING_VALUE',
        /* more items */
      ]
    },
    /* '<AttributeName>': ... */
  },
  ExpressionAttributeNames: {
    '<ExpressionAttributeNameVariable>': 'STRING_VALUE',
    /* '<ExpressionAttributeNameVariable>': ... */
  },
  ExpressionAttributeValues: {
    '<ExpressionAttributeValueVariable>': { /* AttributeValue */
      B: Buffer.from('...') || 'STRING_VALUE' /* Strings will be Base-64 encoded on your behalf */,
      BOOL: true || false,
      BS: [
        Buffer.from('...') || 'STRING_VALUE' /* Strings will be Base-64 encoded on your behalf */,
        /* more items */
      ],
      L: [
        /* recursive AttributeValue */,
        /* more items */
      ],
      M: {
        '<AttributeName>': /* recursive AttributeValue */,
        /* '<AttributeName>': ... */
      },
      N: 'STRING_VALUE',
      NS: [
        'STRING_VALUE',
        /* more items */
      ],
      NULL: true || false,
      S: 'STRING_VALUE',
      SS: [
        'STRING_VALUE',
        /* more items */
      ]
    },
    /* '<ExpressionAttributeValueVariable>': ... */
  },
  FilterExpression: 'STRING_VALUE',
  IndexName: 'STRING_VALUE',
  KeyConditionExpression: 'STRING_VALUE',
  KeyConditions: {
    '<AttributeName>': {
      ComparisonOperator: EQ | NE | IN | LE | LT | GE | GT | BETWEEN | NOT_NULL | NULL | CONTAINS | NOT_CONTAINS | BEGINS_WITH, /* required */
      AttributeValueList: [
        { /* AttributeValue */
          B: Buffer.from('...') || 'STRING_VALUE' /* Strings will be Base-64 encoded on your behalf */,
          BOOL: true || false,
          BS: [
            Buffer.from('...') || 'STRING_VALUE' /* Strings will be Base-64 encoded on your behalf */,
            /* more items */
          ],
          L: [
            /* recursive AttributeValue */,
            /* more items */
          ],
          M: {
            '<AttributeName>': /* recursive AttributeValue */,
            /* '<AttributeName>': ... */
          },
          N: 'STRING_VALUE',
          NS: [
            'STRING_VALUE',
            /* more items */
          ],
          NULL: true || false,
          S: 'STRING_VALUE',
          SS: [
            'STRING_VALUE',
            /* more items */
          ]
        },
        /* more items */
      ]
    },
    /* '<AttributeName>': ... */
  },
  Limit: 'NUMBER_VALUE',
  ProjectionExpression: 'STRING_VALUE',
  QueryFilter: {
    '<AttributeName>': {
      ComparisonOperator: EQ | NE | IN | LE | LT | GE | GT | BETWEEN | NOT_NULL | NULL | CONTAINS | NOT_CONTAINS | BEGINS_WITH, /* required */
      AttributeValueList: [
        { /* AttributeValue */
          B: Buffer.from('...') || 'STRING_VALUE' /* Strings will be Base-64 encoded on your behalf */,
          BOOL: true || false,
          BS: [
            Buffer.from('...') || 'STRING_VALUE' /* Strings will be Base-64 encoded on your behalf */,
            /* more items */
          ],
          L: [
            /* recursive AttributeValue */,
            /* more items */
          ],
          M: {
            '<AttributeName>': /* recursive AttributeValue */,
            /* '<AttributeName>': ... */
          },
          N: 'STRING_VALUE',
          NS: [
            'STRING_VALUE',
            /* more items */
          ],
          NULL: true || false,
          S: 'STRING_VALUE',
          SS: [
            'STRING_VALUE',
            /* more items */
          ]
        },
        /* more items */
      ]
    },
    /* '<AttributeName>': ... */
  },
  ReturnConsumedCapacity: INDEXES | TOTAL | NONE,
  ScanIndexForward: true || false,
  Select: ALL_ATTRIBUTES | ALL_PROJECTED_ATTRIBUTES | SPECIFIC_ATTRIBUTES | COUNT
};
dynamodb.query(params, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});
