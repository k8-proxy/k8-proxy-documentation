
module.exports = {
  docs: [
    {
        "type": "category",
        "label": "Products",
        "items": [
            "products/a-main",
            {
                "type": "category",
                "label": "Compliant Kubernetes",
                "items": [
                    "products/compliant kubernetes/overview",
                    "products/compliant kubernetes/p-monitoring"
                ]
            },
            {
                "type": "category",
                "label": "File Drop",
                "items": [
                    "products/filedrop/fd-aws",
                    "products/filedrop/fd-esxi",
                    "products/filedrop/fd-howto"
                ]
            },
            {
                "type": "category",
                "label": "GW Cloud SDK",
                "items": [
                    "products/gw cloud sdk/a-overview",
                    "products/gw cloud sdk/b-endpoints",
                    "products/gw cloud sdk/bcloudsdk_dep",
                    "products/gw cloud sdk/c-fd-integration-aws",
                    "products/gw cloud sdk/c-fd-integration",
                    "products/gw cloud sdk/d-desktop-integration",
                    "products/gw cloud sdk/deployment",
                    "products/gw cloud sdk/python-sample",
                    "products/gw cloud sdk/upgrade",
                    "products/gw cloud sdk/zip_scenarios"
                ]
            },
            {
                "type": "category",
                "label": "GW Desktop App",
                "items": [
                    "products/gw desktop app/overview"
                ]
            },
            {
                "type": "category",
                "label": "GW Proxy",
                "items": [
                    "products/gw proxy/overview"
                ]
            },
            {
                "type": "category",
                "label": "ICAP Server",
                "items": [
                    "products/icap server/icap-aws",
                    "products/icap server/icap-esxi",
                    "products/icap server/icap-howto",
                    "products/icap server/icap-ui"
                ]
            },
            {
                "type": "category",
                "label": "Sharepoint Plugin",
                "items": [
                    {
                        "type": "category",
                        "label": "online",
                        "items": [
                            "products/sharepoint plugin/online/sharepoint-online-solution-administration",
                            "products/sharepoint plugin/online/sharepoint-online-solution-deployment"
                        ]
                    },
                    {
                        "type": "category",
                        "label": "server",
                        "items": [
                            {
                                "type": "category",
                                "label": "server-setup",
                                "items": [
                                    "products/sharepoint plugin/server/server-setup/1. overview",
                                    "products/sharepoint plugin/server/server-setup/2. sp-vm-manual-install",
                                    "products/sharepoint plugin/server/server-setup/3. sp-vhd-to-ova",
                                    "products/sharepoint plugin/server/server-setup/4. sp-ova-aws",
                                    "products/sharepoint plugin/server/server-setup/5. export-ova-aws"
                                ]
                            },
                            "products/sharepoint plugin/server/sharepoint-server-solution-administration",
                            "products/sharepoint plugin/server/sharepoint-server-solution-deployment",
                            "products/sharepoint plugin/server/sharepoint-server-solution-uninstall"
                        ]
                    },
                    {
                        "type": "category",
                        "label": "web",
                        "items": [
                            "products/sharepoint plugin/web/overview"
                        ]
                    }
                ]
            }
        ]
    }
]
};
