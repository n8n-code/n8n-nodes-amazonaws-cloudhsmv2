import type { INodeProperties } from 'n8n-workflow';

export const defaultDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					]
				}
			},
			"options": [
				{
					"name": "Copy Backup To Region",
					"value": "Copy Backup To Region",
					"action": "Copy Backup To Region",
					"description": "Copy an AWS CloudHSM cluster backup to a different region.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=BaldrApiService.CopyBackupToRegion"
						}
					}
				},
				{
					"name": "Create Cluster",
					"value": "Create Cluster",
					"action": "Create Cluster",
					"description": "Creates a new AWS CloudHSM cluster.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=BaldrApiService.CreateCluster"
						}
					}
				},
				{
					"name": "Create Hsm",
					"value": "Create Hsm",
					"action": "Create Hsm",
					"description": "Creates a new hardware security module (HSM) in the specified AWS CloudHSM cluster.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=BaldrApiService.CreateHsm"
						}
					}
				},
				{
					"name": "Delete Backup",
					"value": "Delete Backup",
					"action": "Delete Backup",
					"description": "Deletes a specified AWS CloudHSM backup. A backup can be restored up to 7 days after the DeleteBackup request is made. For more information on restoring a backup, see <a>RestoreBackup</a>.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=BaldrApiService.DeleteBackup"
						}
					}
				},
				{
					"name": "Delete Cluster",
					"value": "Delete Cluster",
					"action": "Delete Cluster",
					"description": "Deletes the specified AWS CloudHSM cluster. Before you can delete a cluster, you must delete all HSMs in the cluster. To see if the cluster contains any HSMs, use <a>DescribeClusters</a>. To delete an HSM, use <a>DeleteHsm</a>.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=BaldrApiService.DeleteCluster"
						}
					}
				},
				{
					"name": "Delete Hsm",
					"value": "Delete Hsm",
					"action": "Delete Hsm",
					"description": "Deletes the specified HSM. To specify an HSM, you can use its identifier (ID), the IP address of the HSM's elastic network interface (ENI), or the ID of the HSM's ENI. You need to specify only one of these values. To find these values, use <a>DescribeClusters</a>.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=BaldrApiService.DeleteHsm"
						}
					}
				},
				{
					"name": "Describe Backups",
					"value": "Describe Backups",
					"action": "Describe Backups",
					"description": "<p>Gets information about backups of AWS CloudHSM clusters.</p> <p>This is a paginated operation, which means that each response might contain only a subset of all the backups. When the response contains only a subset of backups, it includes a <code>NextToken</code> value. Use this value in a subsequent <code>DescribeBackups</code> request to get more backups. When you receive a response with no <code>NextToken</code> (or an empty or null value), that means there are no more backups to get.</p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=BaldrApiService.DescribeBackups"
						}
					}
				},
				{
					"name": "Describe Clusters",
					"value": "Describe Clusters",
					"action": "Describe Clusters",
					"description": "<p>Gets information about AWS CloudHSM clusters.</p> <p>This is a paginated operation, which means that each response might contain only a subset of all the clusters. When the response contains only a subset of clusters, it includes a <code>NextToken</code> value. Use this value in a subsequent <code>DescribeClusters</code> request to get more clusters. When you receive a response with no <code>NextToken</code> (or an empty or null value), that means there are no more clusters to get.</p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=BaldrApiService.DescribeClusters"
						}
					}
				},
				{
					"name": "Initialize Cluster",
					"value": "Initialize Cluster",
					"action": "Initialize Cluster",
					"description": "Claims an AWS CloudHSM cluster by submitting the cluster certificate issued by your issuing certificate authority (CA) and the CA's root certificate. Before you can claim a cluster, you must sign the cluster's certificate signing request (CSR) with your issuing CA. To get the cluster's CSR, use <a>DescribeClusters</a>.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=BaldrApiService.InitializeCluster"
						}
					}
				},
				{
					"name": "List Tags",
					"value": "List Tags",
					"action": "List Tags",
					"description": "<p>Gets a list of tags for the specified AWS CloudHSM cluster.</p> <p>This is a paginated operation, which means that each response might contain only a subset of all the tags. When the response contains only a subset of tags, it includes a <code>NextToken</code> value. Use this value in a subsequent <code>ListTags</code> request to get more tags. When you receive a response with no <code>NextToken</code> (or an empty or null value), that means there are no more tags to get.</p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=BaldrApiService.ListTags"
						}
					}
				},
				{
					"name": "Modify Backup Attributes",
					"value": "Modify Backup Attributes",
					"action": "Modify Backup Attributes",
					"description": "Modifies attributes for AWS CloudHSM backup.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=BaldrApiService.ModifyBackupAttributes"
						}
					}
				},
				{
					"name": "Modify Cluster",
					"value": "Modify Cluster",
					"action": "Modify Cluster",
					"description": "Modifies AWS CloudHSM cluster.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=BaldrApiService.ModifyCluster"
						}
					}
				},
				{
					"name": "Restore Backup",
					"value": "Restore Backup",
					"action": "Restore Backup",
					"description": "Restores a specified AWS CloudHSM backup that is in the <code>PENDING_DELETION</code> state. For mor information on deleting a backup, see <a>DeleteBackup</a>.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=BaldrApiService.RestoreBackup"
						}
					}
				},
				{
					"name": "Tag Resource",
					"value": "Tag Resource",
					"action": "Tag Resource",
					"description": "Adds or overwrites one or more tags for the specified AWS CloudHSM cluster.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=BaldrApiService.TagResource"
						}
					}
				},
				{
					"name": "Untag Resource",
					"value": "Untag Resource",
					"action": "Untag Resource",
					"description": "Removes the specified tag or tags from the specified AWS CloudHSM cluster.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=BaldrApiService.UntagResource"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /#X-Amz-Target=BaldrApiService.CopyBackupToRegion",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Copy Backup To Region"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "BaldrApiService.CopyBackupToRegion",
			"type": "options",
			"options": [
				{
					"name": "Baldr API Service Copy Backup To Region",
					"value": "BaldrApiService.CopyBackupToRegion"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Copy Backup To Region"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Destination Region",
			"name": "DestinationRegion",
			"type": "string",
			"default": "",
			"description": "The AWS region that will contain your copied CloudHSM cluster backup.",
			"routing": {
				"send": {
					"property": "DestinationRegion",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Copy Backup To Region"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Backup ID",
			"name": "BackupId",
			"type": "string",
			"default": "",
			"description": "The ID of the backup that will be copied to the destination region. ",
			"routing": {
				"send": {
					"property": "BackupId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Copy Backup To Region"
					]
				}
			}
		},
		{
			"displayName": "Tag List",
			"name": "TagList",
			"type": "json",
			"default": "[\n  {\n    \"Value\": {}\n  }\n]",
			"description": "Tags to apply to the destination backup during creation. If you specify tags, only these tags will be applied to the destination backup. If you do not specify tags, the service copies tags from the source backup to the destination backup.",
			"routing": {
				"send": {
					"property": "TagList",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Copy Backup To Region"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Copy Backup To Region"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=BaldrApiService.CreateCluster",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Cluster"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "BaldrApiService.CreateCluster",
			"type": "options",
			"options": [
				{
					"name": "Baldr API Service Create Cluster",
					"value": "BaldrApiService.CreateCluster"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Cluster"
					]
				}
			}
		},
		{
			"displayName": "Backup Retention Policy",
			"name": "BackupRetentionPolicy",
			"type": "json",
			"default": "{\n  \"Value\": {}\n}",
			"description": "A policy that defines how the service retains backups.",
			"routing": {
				"send": {
					"property": "BackupRetentionPolicy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Cluster"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Hsm Type",
			"name": "HsmType",
			"type": "string",
			"default": "",
			"description": "The type of HSM to use in the cluster. Currently the only allowed value is <code>hsm1.medium</code>.",
			"routing": {
				"send": {
					"property": "HsmType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Cluster"
					]
				}
			}
		},
		{
			"displayName": "Source Backup ID",
			"name": "SourceBackupId",
			"type": "string",
			"default": "",
			"description": "The identifier (ID) of the cluster backup to restore. Use this value to restore the cluster from a backup instead of creating a new cluster. To find the backup ID, use <a>DescribeBackups</a>.",
			"routing": {
				"send": {
					"property": "SourceBackupId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Cluster"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Subnet Ids",
			"name": "SubnetIds",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "<p>The identifiers (IDs) of the subnets where you are creating the cluster. You must specify at least one subnet. If you specify multiple subnets, they must meet the following criteria:</p> <ul> <li> <p>All subnets must be in the same virtual private cloud (VPC).</p> </li> <li> <p>You can specify only one subnet per Availability Zone.</p> </li> </ul>",
			"routing": {
				"send": {
					"property": "SubnetIds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Cluster"
					]
				}
			}
		},
		{
			"displayName": "Tag List",
			"name": "TagList",
			"type": "json",
			"default": "[\n  {\n    \"Value\": {}\n  }\n]",
			"description": "Tags to apply to the CloudHSM cluster during creation.",
			"routing": {
				"send": {
					"property": "TagList",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Cluster"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Cluster"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=BaldrApiService.CreateHsm",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Hsm"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "BaldrApiService.CreateHsm",
			"type": "options",
			"options": [
				{
					"name": "Baldr API Service Create Hsm",
					"value": "BaldrApiService.CreateHsm"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Hsm"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Cluster ID",
			"name": "ClusterId",
			"type": "string",
			"default": "",
			"description": "The identifier (ID) of the HSM's cluster. To find the cluster ID, use <a>DescribeClusters</a>.",
			"routing": {
				"send": {
					"property": "ClusterId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Hsm"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Availability Zone",
			"name": "AvailabilityZone",
			"type": "string",
			"default": "",
			"description": "The Availability Zone where you are creating the HSM. To find the cluster's Availability Zones, use <a>DescribeClusters</a>.",
			"routing": {
				"send": {
					"property": "AvailabilityZone",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Hsm"
					]
				}
			}
		},
		{
			"displayName": "Ip Address",
			"name": "IpAddress",
			"type": "string",
			"default": "",
			"description": "The HSM's IP address. If you specify an IP address, use an available address from the subnet that maps to the Availability Zone where you are creating the HSM. If you don't specify an IP address, one is chosen for you from that subnet.",
			"routing": {
				"send": {
					"property": "IpAddress",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Hsm"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Hsm"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=BaldrApiService.DeleteBackup",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Backup"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "BaldrApiService.DeleteBackup",
			"type": "options",
			"options": [
				{
					"name": "Baldr API Service Delete Backup",
					"value": "BaldrApiService.DeleteBackup"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Backup"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Backup ID",
			"name": "BackupId",
			"type": "string",
			"default": "",
			"description": "The ID of the backup to be deleted. To find the ID of a backup, use the <a>DescribeBackups</a> operation.",
			"routing": {
				"send": {
					"property": "BackupId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Backup"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Backup"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=BaldrApiService.DeleteCluster",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Cluster"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "BaldrApiService.DeleteCluster",
			"type": "options",
			"options": [
				{
					"name": "Baldr API Service Delete Cluster",
					"value": "BaldrApiService.DeleteCluster"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Cluster"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Cluster ID",
			"name": "ClusterId",
			"type": "string",
			"default": "",
			"description": "The identifier (ID) of the cluster that you are deleting. To find the cluster ID, use <a>DescribeClusters</a>.",
			"routing": {
				"send": {
					"property": "ClusterId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Cluster"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Cluster"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=BaldrApiService.DeleteHsm",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Hsm"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "BaldrApiService.DeleteHsm",
			"type": "options",
			"options": [
				{
					"name": "Baldr API Service Delete Hsm",
					"value": "BaldrApiService.DeleteHsm"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Hsm"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Cluster ID",
			"name": "ClusterId",
			"type": "string",
			"default": "",
			"description": "The identifier (ID) of the cluster that contains the HSM that you are deleting.",
			"routing": {
				"send": {
					"property": "ClusterId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Hsm"
					]
				}
			}
		},
		{
			"displayName": "Hsm ID",
			"name": "HsmId",
			"type": "string",
			"default": "",
			"description": "The identifier (ID) of the HSM that you are deleting.",
			"routing": {
				"send": {
					"property": "HsmId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Hsm"
					]
				}
			}
		},
		{
			"displayName": "Eni ID",
			"name": "EniId",
			"type": "string",
			"default": "",
			"description": "The identifier (ID) of the elastic network interface (ENI) of the HSM that you are deleting.",
			"routing": {
				"send": {
					"property": "EniId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Hsm"
					]
				}
			}
		},
		{
			"displayName": "Eni Ip",
			"name": "EniIp",
			"type": "string",
			"default": "",
			"description": "The IP address of the elastic network interface (ENI) of the HSM that you are deleting.",
			"routing": {
				"send": {
					"property": "EniIp",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Hsm"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Hsm"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=BaldrApiService.DescribeBackups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Backups"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Backups"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "NextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Backups"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "BaldrApiService.DescribeBackups",
			"type": "options",
			"options": [
				{
					"name": "Baldr API Service Describe Backups",
					"value": "BaldrApiService.DescribeBackups"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Backups"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"type": "string",
			"default": "",
			"description": "The <code>NextToken</code> value that you received in the previous response. Use this value to get more backups.",
			"routing": {
				"send": {
					"property": "NextToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Backups"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"type": "number",
			"default": 0,
			"description": "The maximum number of backups to return in the response. When there are more backups than the number you specify, the response contains a <code>NextToken</code> value.",
			"routing": {
				"send": {
					"property": "MaxResults",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Backups"
					]
				}
			}
		},
		{
			"displayName": "Filters",
			"name": "Filters",
			"type": "json",
			"default": "{}",
			"description": "<p>One or more filters to limit the items returned in the response.</p> <p>Use the <code>backupIds</code> filter to return only the specified backups. Specify backups by their backup identifier (ID).</p> <p>Use the <code>sourceBackupIds</code> filter to return only the backups created from a source backup. The <code>sourceBackupID</code> of a source backup is returned by the <a>CopyBackupToRegion</a> operation.</p> <p>Use the <code>clusterIds</code> filter to return only the backups for the specified clusters. Specify clusters by their cluster identifier (ID).</p> <p>Use the <code>states</code> filter to return only backups that match the specified state.</p> <p>Use the <code>neverExpires</code> filter to return backups filtered by the value in the <code>neverExpires</code> parameter. <code>True</code> returns all backups exempt from the backup retention policy. <code>False</code> returns all backups with a backup retention policy defined at the cluster.</p>",
			"routing": {
				"send": {
					"property": "Filters",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Backups"
					]
				}
			}
		},
		{
			"displayName": "Sort Ascending",
			"name": "SortAscending",
			"type": "boolean",
			"default": true,
			"description": "Designates whether or not to sort the return backups by ascending chronological order of generation.",
			"routing": {
				"send": {
					"property": "SortAscending",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Backups"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Backups"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=BaldrApiService.DescribeClusters",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Clusters"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Clusters"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "NextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Clusters"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "BaldrApiService.DescribeClusters",
			"type": "options",
			"options": [
				{
					"name": "Baldr API Service Describe Clusters",
					"value": "BaldrApiService.DescribeClusters"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Clusters"
					]
				}
			}
		},
		{
			"displayName": "Filters",
			"name": "Filters",
			"type": "json",
			"default": "{}",
			"description": "<p>One or more filters to limit the items returned in the response.</p> <p>Use the <code>clusterIds</code> filter to return only the specified clusters. Specify clusters by their cluster identifier (ID).</p> <p>Use the <code>vpcIds</code> filter to return only the clusters in the specified virtual private clouds (VPCs). Specify VPCs by their VPC identifier (ID).</p> <p>Use the <code>states</code> filter to return only clusters that match the specified state.</p>",
			"routing": {
				"send": {
					"property": "Filters",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Clusters"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"type": "string",
			"default": "",
			"description": "The <code>NextToken</code> value that you received in the previous response. Use this value to get more clusters.",
			"routing": {
				"send": {
					"property": "NextToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Clusters"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"type": "number",
			"default": 0,
			"description": "The maximum number of clusters to return in the response. When there are more clusters than the number you specify, the response contains a <code>NextToken</code> value.",
			"routing": {
				"send": {
					"property": "MaxResults",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Clusters"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Clusters"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=BaldrApiService.InitializeCluster",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Initialize Cluster"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "BaldrApiService.InitializeCluster",
			"type": "options",
			"options": [
				{
					"name": "Baldr API Service Initialize Cluster",
					"value": "BaldrApiService.InitializeCluster"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Initialize Cluster"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Cluster ID",
			"name": "ClusterId",
			"type": "string",
			"default": "",
			"description": "The identifier (ID) of the cluster that you are claiming. To find the cluster ID, use <a>DescribeClusters</a>.",
			"routing": {
				"send": {
					"property": "ClusterId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Initialize Cluster"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Signed Cert",
			"name": "SignedCert",
			"type": "string",
			"default": "",
			"description": "The cluster certificate issued (signed) by your issuing certificate authority (CA). The certificate must be in PEM format and can contain a maximum of 5000 characters.",
			"routing": {
				"send": {
					"property": "SignedCert",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Initialize Cluster"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Trust Anchor",
			"name": "TrustAnchor",
			"type": "string",
			"default": "",
			"description": "The issuing certificate of the issuing certificate authority (CA) that issued (signed) the cluster certificate. You must use a self-signed certificate. The certificate used to sign the HSM CSR must be directly available, and thus must be the root certificate. The certificate must be in PEM format and can contain a maximum of 5000 characters.",
			"routing": {
				"send": {
					"property": "TrustAnchor",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Initialize Cluster"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Initialize Cluster"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=BaldrApiService.ListTags",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Tags"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Tags"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "NextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Tags"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "BaldrApiService.ListTags",
			"type": "options",
			"options": [
				{
					"name": "Baldr API Service List Tags",
					"value": "BaldrApiService.ListTags"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Tags"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Resource ID",
			"name": "ResourceId",
			"type": "string",
			"default": "",
			"description": "The cluster identifier (ID) for the cluster whose tags you are getting. To find the cluster ID, use <a>DescribeClusters</a>.",
			"routing": {
				"send": {
					"property": "ResourceId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Tags"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"type": "string",
			"default": "",
			"description": "The <code>NextToken</code> value that you received in the previous response. Use this value to get more tags.",
			"routing": {
				"send": {
					"property": "NextToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Tags"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"type": "number",
			"default": 0,
			"description": "The maximum number of tags to return in the response. When there are more tags than the number you specify, the response contains a <code>NextToken</code> value.",
			"routing": {
				"send": {
					"property": "MaxResults",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Tags"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Tags"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=BaldrApiService.ModifyBackupAttributes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Modify Backup Attributes"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "BaldrApiService.ModifyBackupAttributes",
			"type": "options",
			"options": [
				{
					"name": "Baldr API Service Modify Backup Attributes",
					"value": "BaldrApiService.ModifyBackupAttributes"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Modify Backup Attributes"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Backup ID",
			"name": "BackupId",
			"type": "string",
			"default": "",
			"description": "The identifier (ID) of the backup to modify. To find the ID of a backup, use the <a>DescribeBackups</a> operation.",
			"routing": {
				"send": {
					"property": "BackupId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Modify Backup Attributes"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Never Expires",
			"name": "NeverExpires",
			"type": "boolean",
			"default": true,
			"description": "Specifies whether the service should exempt a backup from the retention policy for the cluster. <code>True</code> exempts a backup from the retention policy. <code>False</code> means the service applies the backup retention policy defined at the cluster.",
			"routing": {
				"send": {
					"property": "NeverExpires",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Modify Backup Attributes"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Modify Backup Attributes"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=BaldrApiService.ModifyCluster",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Modify Cluster"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "BaldrApiService.ModifyCluster",
			"type": "options",
			"options": [
				{
					"name": "Baldr API Service Modify Cluster",
					"value": "BaldrApiService.ModifyCluster"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Modify Cluster"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Backup Retention Policy",
			"name": "BackupRetentionPolicy",
			"type": "json",
			"default": "{\n  \"Value\": {}\n}",
			"description": "A policy that defines how the service retains backups.",
			"routing": {
				"send": {
					"property": "BackupRetentionPolicy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Modify Cluster"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Cluster ID",
			"name": "ClusterId",
			"type": "string",
			"default": "",
			"description": "The identifier (ID) of the cluster that you want to modify. To find the cluster ID, use <a>DescribeClusters</a>.",
			"routing": {
				"send": {
					"property": "ClusterId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Modify Cluster"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Modify Cluster"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=BaldrApiService.RestoreBackup",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Restore Backup"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "BaldrApiService.RestoreBackup",
			"type": "options",
			"options": [
				{
					"name": "Baldr API Service Restore Backup",
					"value": "BaldrApiService.RestoreBackup"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Restore Backup"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Backup ID",
			"name": "BackupId",
			"type": "string",
			"default": "",
			"description": "The ID of the backup to be restored. To find the ID of a backup, use the <a>DescribeBackups</a> operation.",
			"routing": {
				"send": {
					"property": "BackupId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Restore Backup"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Restore Backup"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=BaldrApiService.TagResource",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Tag Resource"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "BaldrApiService.TagResource",
			"type": "options",
			"options": [
				{
					"name": "Baldr API Service Tag Resource",
					"value": "BaldrApiService.TagResource"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Tag Resource"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Resource ID",
			"name": "ResourceId",
			"type": "string",
			"default": "",
			"description": "The cluster identifier (ID) for the cluster that you are tagging. To find the cluster ID, use <a>DescribeClusters</a>.",
			"routing": {
				"send": {
					"property": "ResourceId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Tag Resource"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Tag List",
			"name": "TagList",
			"type": "json",
			"default": "[\n  {\n    \"Value\": {}\n  }\n]",
			"description": "A list of one or more tags.",
			"routing": {
				"send": {
					"property": "TagList",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Tag Resource"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Tag Resource"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=BaldrApiService.UntagResource",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Untag Resource"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "BaldrApiService.UntagResource",
			"type": "options",
			"options": [
				{
					"name": "Baldr API Service Untag Resource",
					"value": "BaldrApiService.UntagResource"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Untag Resource"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Resource ID",
			"name": "ResourceId",
			"type": "string",
			"default": "",
			"description": "The cluster identifier (ID) for the cluster whose tags you are removing. To find the cluster ID, use <a>DescribeClusters</a>.",
			"routing": {
				"send": {
					"property": "ResourceId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Untag Resource"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Tag Key List",
			"name": "TagKeyList",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "A list of one or more tag keys for the tags that you are removing. Specify only the tag keys, not the tag values.",
			"routing": {
				"send": {
					"property": "TagKeyList",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Untag Resource"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Untag Resource"
					]
				}
			}
		},
];
