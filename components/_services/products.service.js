export const ProductsService = {
    getCategories,
    getProductsList,
    getProductDetail
}

function getCategories() {
    const items = [
        {
            "name": "DESK PHONES",
            "slug": "desk_phone"
        },
        {
            "name": "CONFERENCE PHONES",
            "slug": "conference_phones"
        },
        {
            "name": "HEADSETS",
            "slug": "headsets"
        }
    ];

    return items;
}


function getProductsList() {
    const items = [
        {
            id: "1",
            productName: "GRP2615",
            sku: "grp2615",
            productCategory: "desk_phone",
            masterImage: "/img/products/GRP2615_front.png",
            thumbnailImage: "/img/products/GRP2615_left.png",
            newFlag: true,
            saleFlag: false,
            promoFlag: false,
            stockQty: "-1 (not set -- future)",
            inStock: true,
            publicDisplay: true,
            regPrice: 200.00,
            salePrice: 180.00,
            saleStart: "2020-06-10 09:00",
            saleEnd: "2020-06-30 23:59",
            itemStart: "2020-05-01 09:00",
            itemEnd: null,
            listDetail: "&#10004; 12 lines, 6 SIP accounts, 5 soft keys and 5-way voice conferencing<br />&#10004; 48 on-screen digitally customizable BLF/speed-dial keys4.3 inch (480x272) color-screen LCD<br />&#10004; Dual Gigabit ports, integrated PoEIntegrated Bluetooth<br />"
        },
        {
            id: "2",
            productName: "GRP2616",
            sku: "grp2616",
            productCategory: "desk_phone",
            masterImage: "/img/products/gxp1620_front_0.png",
            thumbnailImage: "/img/products/gxp1620_left_0.png",
            newFlag: false,
            saleFlag: false,
            promoFlag: false,
            stockQty: "-1 (not set -- future)",
            inStock: true,
            publicDisplay: true,
            regPrice: 200.00,
            salePrice: 180.00,
            saleStart: "2020-06-10 09:00",
            saleEnd: "2020-06-30 23:59",
            itemStart: "2020-05-01 09:00",
            itemEnd: null,
            listDetail: "&#10004; 12 lines, 6 SIP accounts, 5 soft keys and 5-way voice conferencing<br />&#10004; 48 on-screen digitally customizable BLF/speed-dial keys4.3 inch (480x272) color-screen LCD<br />&#10004; Dual Gigabit ports, integrated PoEIntegrated Bluetooth<br />"
        },
        {
            id: "3",
            productName: "HRP2617",
            sku: "grp2616",
            productCategory: "headsets",
            masterImage: "/img/products/gvc3202_square.png",
            thumbnailImage: "/img/products/GVC3202-back.png",
            newFlag: true,
            saleFlag: false,
            promoFlag: false,
            stockQty: "-1 (not set -- future)",
            inStock: true,
            publicDisplay: true,
            regPrice: 200.00,
            salePrice: 180.00,
            saleStart: "2020-06-10 09:00",
            saleEnd: "2020-06-30 23:59",
            itemStart: "2020-05-01 09:00",
            itemEnd: null,
            listDetail: "&#10004; 12 lines, 6 SIP accounts, 5 soft keys and 5-way voice conferencing<br />&#10004; 48 on-screen digitally customizable BLF/speed-dial keys4.3 inch (480x272) color-screen LCD<br />&#10004; Dual Gigabit ports, integrated PoEIntegrated Bluetooth<br />"
        },
        {
            id: "4",
            productName: "HRP2618",
            sku: "grp2616",
            productCategory: "headsets",
            masterImage: "/img/products/GSC3610_front.png",
            thumbnailImage: "/img/products/GSC3610_right.png",
            newFlag: false,
            saleFlag: false,
            promoFlag: false,
            stockQty: "-1 (not set -- future)",
            inStock: true,
            publicDisplay: true,
            regPrice: 200.00,
            salePrice: 180.00,
            saleStart: "2020-06-10 09:00",
            saleEnd: "2020-06-30 23:59",
            itemStart: "2020-05-01 09:00",
            itemEnd: null,
            listDetail: "&#10004; 12 lines, 6 SIP accounts, 5 soft keys and 5-way voice conferencing<br />&#10004; 48 on-screen digitally customizable BLF/speed-dial keys4.3 inch (480x272) color-screen LCD<br />&#10004; Dual Gigabit ports, integrated PoEIntegrated Bluetooth<br />"
        },
        {
            id: "5",
            productName: "CRP2619",
            sku: "grp2616",
            productCategory: "conference_phones",
            masterImage: "/img/products/GRP2613_front.png",
            thumbnailImage: "/img/products/GRP2613_left.png",
            newFlag: false,
            saleFlag: true,
            promoFlag: false,
            stockQty: "-1 (not set -- future)",
            inStock: true,
            publicDisplay: true,
            regPrice: 200.00,
            salePrice: 180.00,
            saleStart: "2020-06-10 09:00",
            saleEnd: "2020-06-30 23:59",
            itemStart: "2020-05-01 09:00",
            itemEnd: null,
            listDetail: "&#10004; 12 lines, 6 SIP accounts, 5 soft keys and 5-way voice conferencing<br />&#10004; 48 on-screen digitally customizable BLF/speed-dial keys4.3 inch (480x272) color-screen LCD<br />&#10004; Dual Gigabit ports, integrated PoEIntegrated Bluetooth<br />"
        },
         {
            id: "6",
            productName: "CRP2630",
            sku: "grp2616",
            productCategory: "conference_phones",
            masterImage: "/img/products/dp730_front_web.jpg",
            thumbnailImage: "/img/products/dp722_handset_web.jpg",
            newFlag: false,
            saleFlag: false,
            promoFlag: true,
            stockQty: "-1 (not set -- future)",
            inStock: true,
            publicDisplay: true,
            regPrice: 200.00,
            salePrice: 180.00,
            saleStart: "2020-06-10 09:00",
            saleEnd: "2020-06-30 23:59",
            itemStart: "2020-05-01 09:00",
            itemEnd: null,
            listDetail: "&#10004; 12 lines, 6 SIP accounts, 5 soft keys and 5-way voice conferencing<br />&#10004; 48 on-screen digitally customizable BLF/speed-dial keys4.3 inch (480x272) color-screen LCD<br />&#10004; Dual Gigabit ports, integrated PoEIntegrated Bluetooth<br />"
        },
        {
            id: "7",
            productName: "GRP2615",
            sku: "grp2615",
            productCategory: "desk_phone",
            masterImage: "/img/products/GRP2615_front.png",
            thumbnailImage: "/img/products/GRP2615_left.png",
            newFlag: true,
            saleFlag: false,
            promoFlag: false,
            stockQty: "-1 (not set -- future)",
            inStock: true,
            publicDisplay: true,
            regPrice: 200.00,
            salePrice: 180.00,
            saleStart: "2020-06-10 09:00",
            saleEnd: "2020-06-30 23:59",
            itemStart: "2020-05-01 09:00",
            itemEnd: null,
            listDetail: "&#10004; 12 lines, 6 SIP accounts, 5 soft keys and 5-way voice conferencing<br />&#10004; 48 on-screen digitally customizable BLF/speed-dial keys4.3 inch (480x272) color-screen LCD<br />&#10004; Dual Gigabit ports, integrated PoEIntegrated Bluetooth<br />"
        },
        {
            id: "8",
            productName: "GRP2616",
            sku: "grp2616",
            productCategory: "desk_phone",
            masterImage: "/img/products/gxp1620_front_0.png",
            thumbnailImage: "/img/products/gxp1620_left_0.png",
            newFlag: false,
            saleFlag: false,
            promoFlag: false,
            stockQty: "-1 (not set -- future)",
            inStock: true,
            publicDisplay: true,
            regPrice: 200.00,
            salePrice: 180.00,
            saleStart: "2020-06-10 09:00",
            saleEnd: "2020-06-30 23:59",
            itemStart: "2020-05-01 09:00",
            itemEnd: null,
            listDetail: "&#10004; 12 lines, 6 SIP accounts, 5 soft keys and 5-way voice conferencing<br />&#10004; 48 on-screen digitally customizable BLF/speed-dial keys4.3 inch (480x272) color-screen LCD<br />&#10004; Dual Gigabit ports, integrated PoEIntegrated Bluetooth<br />"
        },
        {
            id: "9",
            productName: "HRP2617",
            sku: "grp2616",
            productCategory: "headsets",
            masterImage: "/img/products/gvc3202_square.png",
            thumbnailImage: "/img/products/GVC3202-back.png",
            newFlag: false,
            saleFlag: true,
            promoFlag: false,
            stockQty: "-1 (not set -- future)",
            inStock: true,
            publicDisplay: true,
            regPrice: 200.00,
            salePrice: 180.00,
            saleStart: "2020-06-10 09:00",
            saleEnd: "2020-06-30 23:59",
            itemStart: "2020-05-01 09:00",
            itemEnd: null,
            listDetail: "&#10004; 12 lines, 6 SIP accounts, 5 soft keys and 5-way voice conferencing<br />&#10004; 48 on-screen digitally customizable BLF/speed-dial keys4.3 inch (480x272) color-screen LCD<br />&#10004; Dual Gigabit ports, integrated PoEIntegrated Bluetooth<br />"
        },
        {
            id: "10",
            productName: "HRP2618",
            sku: "grp2616",
            productCategory: "headsets",
            masterImage: "/img/products/GSC3610_front.png",
            thumbnailImage: "/img/products/GSC3610_right.png",
            newFlag: false,
            saleFlag: false,
            promoFlag: true,
            stockQty: "-1 (not set -- future)",
            inStock: true,
            publicDisplay: true,
            regPrice: 200.00,
            salePrice: 180.00,
            saleStart: "2020-06-10 09:00",
            saleEnd: "2020-06-30 23:59",
            itemStart: "2020-05-01 09:00",
            itemEnd: null,
            listDetail: "&#10004; 12 lines, 6 SIP accounts, 5 soft keys and 5-way voice conferencing<br />&#10004; 48 on-screen digitally customizable BLF/speed-dial keys4.3 inch (480x272) color-screen LCD<br />&#10004; Dual Gigabit ports, integrated PoEIntegrated Bluetooth<br />"
        },
        {
            id: "11",
            productName: "CRP2619",
            sku: "grp2616",
            productCategory: "conference_phones",
            masterImage: "/img/products/GRP2613_front.png",
            thumbnailImage: "/img/products/GRP2613_left.png",
            newFlag: false,
            saleFlag: true,
            promoFlag: false,
            stockQty: "-1 (not set -- future)",
            inStock: true,
            publicDisplay: true,
            regPrice: 200.00,
            salePrice: 180.00,
            saleStart: "2020-06-10 09:00",
            saleEnd: "2020-06-30 23:59",
            itemStart: "2020-05-01 09:00",
            itemEnd: null,
            listDetail: "&#10004; 12 lines, 6 SIP accounts, 5 soft keys and 5-way voice conferencing<br />&#10004; 48 on-screen digitally customizable BLF/speed-dial keys4.3 inch (480x272) color-screen LCD<br />&#10004; Dual Gigabit ports, integrated PoEIntegrated Bluetooth<br />"
        },
         {
            id: "12",
            productName: "CRP2630",
            sku: "grp2616",
            productCategory: "conference_phones",
            masterImage: "/img/products/dp730_front_web.jpg",
            thumbnailImage: "/img/products/dp722_handset_web.jpg",
            newFlag: false,
            saleFlag: false,
            promoFlag: true,
            stockQty: "-1 (not set -- future)",
            inStock: true,
            publicDisplay: true,
            regPrice: 200.00,
            salePrice: 180.00,
            saleStart: "2020-06-10 09:00",
            saleEnd: "2020-06-30 23:59",
            itemStart: "2020-05-01 09:00",
            itemEnd: null,
            listDetail: "&#10004; 12 lines, 6 SIP accounts, 5 soft keys and 5-way voice conferencing<br />&#10004; 48 on-screen digitally customizable BLF/speed-dial keys4.3 inch (480x272) color-screen LCD<br />&#10004; Dual Gigabit ports, integrated PoEIntegrated Bluetooth<br />"
        },
    ]

    return items;
}

function getProductDetail() {
    const item = {
        productTitle: "Grandstream GXV3380",
        productName: "GXV3380",
        shortDescription: "The GXV3380 is a powerful High-End Smart Video Phone for Android that combines a 16 line IP phone with a multi-platform video collaboration solution and the functionality of an Android tablet to offer an all-in-one communication solution. It is the ideal desktop device for busy professionals and executives and also offers a powerful yet cost-effective device for any conference room.", description: "The GXV3380 IP Video Phone for Android combines a 16-line IP video phone with a multi-platform video collaboration solution and the functionality of an Android tablet to offer an all-in-one communications solution. This IP video phone delivers a powerful experience through its?8 inch 1280x800 capacitive touch screen, 2 megapixel camera, HDMI in/out for content sharing, dual microphones and support for 1080p HD video. The GXV3380 adds dual Gigabit ports with PoE/PoE+, integrated Wi-Fi (802.11ac) and Bluetooth support. It also runs Android 7.x and offers instant access to hundreds of thousands of Android apps. By combining a state-of-the-art IP video phone, an advanced video collaboration solution, and the functionality of an Android tablet, the GXV3380 offers businesses throughout the world a powerful desktop communication and productivity solution.",
        sku: "gxv3380",
        productCategory: "desk_phone",
        masterImage: "/img/products/gxp178x_website_front.jpg",
        thumbnailImage: "/img/products/gxp178x_website_left.jpg",
        productDescription: "The GXV3380 IP Video Phone for Android combines a 16-line IP video phone with a multi-platform video collaboration solution and the functionality of an Android tablet to offer an all-in-one communications solution. This IP video phone delivers a powerful experience through its?8 inch 1280x800 capacitive touch screen, 2 megapixel camera, HDMI in/out for content sharing, dual microphones and support for 1080p HD video. The GXV3380 adds dual Gigabit ports with PoE/PoE+, integrated Wi-Fi (802.11ac) and Bluetooth support. It also runs Android 7.x and offers instant access to hundreds of thousands of Android apps. By combining a state-of-the-art IP video phone, an advanced video collaboration solution, and the functionality of an Android tablet, the GXV3380 offers businesses throughout the world a powerful desktop communication and productivity solution.",
        imageGallery: [
            {
                "image": "/img/products/gxp178x_website_front.jpg",
                "imageAlt": "Some Alt Image Text",
            },
            {
                "image": "/img/products/GRP2612_front.png",
                "imageAlt": "Some Other Alt Image Text",
            },
            {
                "image": "/img/products/GXP2160_Telephone.jpg",
                "imageAlt": "Some Alt Image Text",
            },
            {
                "image": "/img/products/GXP2130.jpg",
                "imageAlt": "Some Alt Image Text",
            },
            {
                "image": "/img/products/gxp1760_website_front.jpg",
                "imageAlt": "Some Alt Image Text",
            },
            {
                "image": "/img/products/gxp2135_front.png",
                "imageAlt": "Some Alt Image Text",
            },
            {
                "image": "/img/products/GRP2613_front.png",
                "imageAlt": "Some Alt Image Text",
            },
            {
                "image": "/img/products/GRP2612_front.png",
                "imageAlt": "Some Alt Image Text",
            },
            {
                "image": "/img/products/GRP2615_front.png",
                "imageAlt": "Some Alt Image Text",
            },
            {
                "image": "/img/products/gxp1610_gxp1615_front.png",
                "imageAlt": "Some Alt Image Text",
            }
        ],
        resources: [
            {
                "resourceName": "Product Datasheet",
                "type": "datasheet",
                "icon": "list-ul",
                "isDefault": true,
                "color": "primary",
                "description": "Product Datasheet provides you detail information of IT service",
                "languages": [
                    {
                        "code": "en",
                        "link": "/info/gxv3380_en.pdf"
                    },
                    {
                        "code": "fr",
                        "link": "/info/gxv3380_fr.pdf"
                    },
                    {
                        "code": "es",
                        "link": "/info/gxv3380_es.pdf"
                    }
                ]
            },
            {
                "resourceName": "Some Other PDF",
                "isDefault": false,
                "type": "other",
                "icon": "file-pdf",
                "color": "secondary",
                "description": "They can provides vast information through PDF.",
                "languages": [
                    {
                        "code": "en",
                        "link": "/info/gxv3380_case.pdf"
                    }
                ]
            },
            {
                "resourceName": "Manufacturer Firmware",
                "isDefault": false,
                "type": "other",
                "color": "primary",
                "icon": "computer-classic",
                "description": "You can get Manufacturer Firmware information from this resource.",
                "languages": [
                    {
                        "code": "en",
                        "link": "https://test.com/somewhere.bin"
                    }
                ]
            }
        ],
        vendorName: "Grandstream Networks",
        features: "&#9989; 16 lines with up to 16 SIP accounts<br />&#9989; Built-in 2 megapixel camera for video calling with privacy shutter<br />&#9989; Runs on the Android 7.x operating system<br />&#9989; Built-in Bluetooth for syncing with mobile devices and connecting Bluetooth headsets<br />&#9989; Dual-switched auto-sensing 10/100/1000Mbps network ports<br />&#9989; Integrated dualband Wi-Fi (2.4GHz & 5GHz)<br />&#9989; Built-in PoE/PoE+ for power and network connections<br />&#9989; Dual-mic HD speakerphone with advanced echo cancellation & excellent double-talk performance for any scenario<br />&#9989; 64-bit quad-core processor, 2GB RAM, and 16GB Flash <br />&#9989; 8\"(1280x800) capacitive 10-point touch screen IPS LCD<br />&#9989; Peripherals include HDMI-in/out, USB, Micro SD, headset jack, EHS (Plantronics headsets)<br />&#9989; 7-way HD audio conferencing & 3-way 1080p 30fps HD video capability<br />",
        featureImage: {
            "image": "/img/products/gxp1630_right_updated_002.png",
            "imageAlt": "Some Alt Image Text",
            "imageHeight": 380,
            "imageWidth": 690
        },
        featureIcons: [
            {
                "icon": "barcode-scan",
                "text": "Barcode"
            },
            {
                "icon": "box-full",
                "text": "Full Box"
            },
            {
                "icon": "car-crash",
                "text": "Crash"
            },
            {
                "icon": "bus-school",
                "text": "Bus"
            },
            {
                "icon": "microscope",
                "text": "Microscope"
            },
            {
                "icon": "users-class",
                "text": "Users Class"
            },
            {
                "icon": "user-graduate",
                "text": "Graduate"
            },
            {
                "icon": "laptop-code",
                "text": "Laptop"
            },
            {
                "icon": "digging",
                "text": "Digging"
            },
            {
                "icon": "globe-stand",
                "text": "Globe Stand"
            },
            {
                "icon": "chart-line-down",
                "text": "Chart Down"
            },
            {
                "icon": "comments-alt-dollar",
                "text": "Comments Dollar"
            },
            {
                "icon": "coin",
                "text": "Coin"
            },
            {
                "icon": "credit-card-front",
                "text": "Credit Card"
            },
        ],
        ewFlag: false,
        saleFlag: false,
        promoFlag: false,
        stockQty: "-1 (not set -- future)",
        inStock: true,
        publicDisplay: true,
        regPrice: 200.00,
        salePrice: 180.00,
        saleStart: "2020-06-10 09:00",
        saleEnd: "2020-06-30 23:59",
        itemStart: "2020-05-01 09:00",
        itemEnd: "2020-07-01 09:00",
        listDetail: "&#10004; 12 lines, 6 SIP accounts, 5 soft keys and 5-way voice conferencing<br />&#10004; 48 on-screen digitally customizable BLF/speed-dial keys4.3 inch (480x272) color-screen LCD<br />&#10004; Dual Gigabit ports, integrated PoEIntegrated Bluetooth<br />",
        relatedProducts: [
            {
                id: "1",
                productName: "GXV3380",
                sku: "gxv3380",
                productCategory: "desk_phone",
                masterImage: "/img/products/GRP2613_front.png",
                thumbnailImage: "/img/products/GRP2613_left.png",
                newFlag: false,
                saleFlag: false,
                promoFlag: false,
                stockQty: "-1 (not set -- future)",
                inStock: true,
                publicDisplay: true,
                regPrice: 200.00,
                salePrice: 180.00,
                saleStart: "2020-06-10 09:00",
                saleEnd: "2020-06-30 23:59",
                itemStart: "2020-05-01 09:00",
                itemEnd: null,
                listDetail: "&#10004; 12 lines, 6 SIP accounts, 5 soft keys and 5-way voice conferencing<br />&#10004; 48 on-screen digitally customizable BLF/speed-dial keys4.3 inch (480x272) color-screen LCD<br />&#10004; Dual Gigabit ports, integrated PoEIntegrated Bluetooth<br />"
            },
            {
                id: "2",
                productName: "GXV3370",
                sku: "gxv3370",
                productCategory: "desk_phone",
                masterImage: "/img/products/GRP2615_front.png",
                thumbnailImage: "/img/products/GRP2615_left.png",
                newFlag: false,
                saleFlag: false,
                promoFlag: false,
                stockQty: "-1 (not set -- future)",
                inStock: true,
                publicDisplay: true,
                regPrice: 200.00,
                salePrice: 180.00,
                saleStart: "2020-06-10 09:00",
                saleEnd: "2020-06-30 23:59",
                itemStart: "2020-05-01 09:00",
                itemEnd: null,
                listDetail: "&#10004; 12 lines, 6 SIP accounts, 5 soft keys and 5-way voice conferencing<br />&#10004; 48 on-screen digitally customizable BLF/speed-dial keys4.3 inch (480x272) color-screen LCD<br />&#10004; Dual Gigabit ports, integrated PoEIntegrated Bluetooth<br />"
            },
            {
                id: "3",
                productName: "GXV3370",
                sku: "gxv3370",
                productCategory: "desk_phone",
                masterImage: "/img/products/GRP2615_front.png",
                thumbnailImage: "/img/products/GRP2615_left.png",
                newFlag: false,
                saleFlag: false,
                promoFlag: false,
                stockQty: "-1 (not set -- future)",
                inStock: true,
                publicDisplay: true,
                regPrice: 200.00,
                salePrice: 180.00,
                saleStart: "2020-06-10 09:00",
                saleEnd: "2020-06-30 23:59",
                itemStart: "2020-05-01 09:00",
                itemEnd: null,
                listDetail: "&#10004; 12 lines, 6 SIP accounts, 5 soft keys and 5-way voice conferencing<br />&#10004; 48 on-screen digitally customizable BLF/speed-dial keys4.3 inch (480x272) color-screen LCD<br />&#10004; Dual Gigabit ports, integrated PoEIntegrated Bluetooth<br />"
            }
        ],
        compatible: [
            {
                "name": "Business Cloud",
                "link": "/business-cloud"
            },
            {
                "name": "MS Teams Hybrid",
                "link": "/ms-teams-hybrid"
            }
        ]
    }
    return item;
}