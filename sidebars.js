module.exports = {
	someSidebar: {
		"Dashboards":
			[
				{
					"Websites": [					
						"dashboards/websites/production",
						"dashboards/websites/development",
					],							
				}
			],
		"Flavors":
		[
			{
				"Flavor A": [
					"flavors/flavor-a/overview",					
					"flavors/flavor-a/technical-architecture",	
					"flavors/flavor-a/faq",	
					"flavors/flavor-a/manual-setup",	
					"flavors/flavor-a/automated-setup",	
					"flavors/flavor-a/testing",					
					{
						"Release Notes" :
						[
							"flavors/flavor-a/release-notes/history",
							{
								"0.x":
								[
									"flavors/flavor-a/release-notes/0_x/0_1",
								]
							}							
						]
					}
				],							
			}
		],
		"Websites":
		[
			{					
				"SharePoint": [	
					{
						"cloud":
						[
							"websites/sharepoint/cloud/overview",
							"websites/sharepoint/cloud/file-handler"
						],
						"self-hosted":
						[
							"websites/sharepoint/self-hosted/overview",
							"websites/sharepoint/self-hosted/manual-install",
							"websites/sharepoint/self-hosted/http-module",							
						],	
					}			
				],
				"gov.uk": [	
				"websites/gov.uk/overview",
				],
				"gwfiledrop": [	
				"websites/gwfiledrop/overview",
				],					
				"atlassian": [	
				"websites/atlassian/overview",
				],
				"owasp": [	
				"websites/owasp/overview",
				],
				"github": [	
				"websites/github/overview",
				],
				"microsoft": [	
				"websites/microsoft/overview",
				],
				"fortinet": [	
				"websites/fortinet/overview",
				],
				"a10networks": [	
				"websites/a10networks/overview",				
				],
				"bsigroup": [	
				"websites/bsigroup/overview",			
				],
				"gwengineering": [	
				"websites/gwengineering/overview",
				],
				"gwwebsite": [	
				"websites/gwwebsite/overview",
				],
				"msrb": [	
				"websites/msrb/overview",
				],
				"ukzones": [	
				"websites/ukzones/overview",
				],
			},							
		],	
		"KB":
			[									
				"kb/style-guide",
				"kb/website-checklist",					
			],
	},
};
