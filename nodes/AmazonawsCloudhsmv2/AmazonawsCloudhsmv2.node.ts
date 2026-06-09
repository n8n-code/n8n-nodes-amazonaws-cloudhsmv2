import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { defaultDescription } from './resources/default';

export class AmazonawsCloudhsmv2 implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'amazonaws-cloudhsmv2',
		name: 'N8nDevAmazonawsCloudhsmv2',
		icon: { light: 'file:./amazonaws-cloudhsmv2.png', dark: 'file:./amazonaws-cloudhsmv2.dark.png' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'For more information about AWS CloudHSM, see AWS CloudHSM and the AWS CloudHSM User Gu..',
		defaults: { name: 'amazonaws-cloudhsmv2' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevAmazonawsCloudhsmv2Api',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Default",
					"value": "Default",
					"description": ""
				}
			],
			"default": ""
		},
		...defaultDescription
		],
	};
}
