import boto3
import os
import json

ddb_client = boto3.client('dynamodb', region_name=os.environ['AWS_REGION'])

table_name = os.environ['TABLE_NAME']
api_url = os.environ['API_URL']

def handler(event, context):
    print(event)
    print(f'Endpoint URL: {api_url}')

    connection_id = event['ConnectionId']

    apigw_management_api_client = boto3.client('apigatewaymanagementapi', endpoint_url=api_url)

    try:
        apigw_management_api_client.post_to_connection(
            ConnectionId=connection_id,
            Data=bytes(json.dumps(event), 'utf-8')
        )
    except apigw_management_api_client.exceptions.GoneException:
        # API Gateway returns HTTP 410 (GoneException) when the client has disconnected.
        print(f"Found stale connection, deleting {connection_id}")
        ddb_client.delete_item(TableName=table_name, Key={'connectionId': {'S': connection_id}})

    return {
        'ConnectionId': event['ConnectionId']
    }
