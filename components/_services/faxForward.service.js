export const FaxForwardService = {
    getFaxforwardList,
    getFaqItems,
    getFaqPortInNumItems,
    getPricingItems
}

function getFaxforwardList() {
    const items = [
        {
            title: "Virtualize your fax number",
            icon: "",
            content: "Transfer your fax line from any carrier to save money on your monthly bills, while keeping the number you need."
        },
        {
            title: "Receive Faxes to Email",
            icon: "",
            content: "Get all your faxes to your inbox as pdf attachments."
        },
        {
            title: "Send Faxes from Email",
            icon: "",
            content: "Send all your faxes using your existing email. No one will know the difference in your fax service."
        },
    ]

    return items;
}

function getFaqItems() {
    const items = [
        {
            title: "Is there any software involved?",
            content: "No software is needed. Faxes are delivered right to your email as a PDF. You can easily print, save or forward them from your computer, tablet or smart phone."
        },
        {
            title: "Can I keep my established fax number?",
            content: "Yes! You can either port in your current telephone number(s) into Tridacom or setup call forwarding with your local telephone company to have calls to your current phone number transferred to your new Tridacom phone number."
        },
        {
            title: "Can my personal phone number be strictly used as a fax number or a voice number?",
            content: "You may certainly designate your phone number to be used only for faxing or for accepting voice calls. This setting may be changed at anytime from your account online."
        },
        {
            title: "Can you provide phone numbers in my area code?",
            content: "We provide phone numbers with area codes in 78 countries. For a full list of the area codes we currently offer, please visit our Pricing Page. If you are interested in an area code that is not presently offered, please email your request to sales@tridacom.com and we will notify you if we can obtain it or when it becomes available."
        },
        {
            title: "What file size can I expect for a one-page fax?",
            content: "A one-page fax can vary but typically range between 30 KB to 100 KB."
        },
        {
            title: "Can I receive legal size faxes?",
            content: 'Yes! If sender has set the size to legal (8.5" x 14") on their end, then you will receive the fax as a legal-size document, so you do not have to be concerned with automatic shrinking to fit on letter size.'
        },
        {
            title: "How do I know when a fax has completed?",
            content: "Once a fax transmission has completed, a confirmation email is delivered to you. You may change your preference to receive notifications only for particular statuses (successful, failed, busy, or no answer) and to receive a copy of the fax document attached to the email."
        },
        {
            title: "What file formats do you support for fax sending?",
            content: "Faxes may be sent in several various formats. We currently support:",
            subitems: [
                {
                    content: "Microsoft® Office programs: Word (.doc, .docx), Excel (.xls, .xlsx), PowerPoint (.ppt, .pptx)"
                },
                {
                    content: "Document formats: .pdf, .rtf, .txt"
                },
                {
                    content: "Image formats: .bmp .gif, .jpeg, .jpg, .tif, .tiff"
                },
                {
                    content: "Web Page: .htm, .html"
                },
            ]
        },
        {
            title: "If a call is connected to my number, will the next caller receive a busy signal?",
            content: "Your phone number can handle simultaneous phone calls to avoid busy signals, so multiple people can be calling you and sending faxes to your number at the same time."
        },
        {
            title: "When can I cancel my old fax line?",
            content: "Once your number has safely transferred to Tridacom you can cancel your old phone service."
        },
    ];

    return items;
}


function getFaqPortInNumItems() {
    const items = [
        {
            title: "You have a number you want to keep: ",
            content: "Transfer that number to Tridacom and use it with our service. We can accept the majority of wireless and landline phone numbers from the US and Canada. You own your phone number and can move it to another service provider at any time. Adding phone numbers is an additional monthly fee."
        },
        {
            title: "You want to be able to send texts: ",
            content: "You can send and receive text messages with your Tridacom phone numbers. Messages can be sent from any local phone number in your account except toll free numbers"
        },
        {
            title: "You want to be able block calls: ",
            content: "You can stop unwanted calls and block telemarketers, robo, fraud or phishing calls blowing up your phone number? Easily add them to your blocked list. Calls will no longer reach you and you'll never hear from them again."
        }
        
    ]

    return items;
}

function getPricingItems() {
    const items = [
        {
            title: "Call forwarding:",
            content: "Forward all your incoming calls to any US or Canadian phone number. You can update your forwarding number at any time anytime and changes are instantly activated. Looking for international forwarding? Contact us"
        },
        {
            title: "Number Parking: ",
            content: "Park your number with Tridacom to keep that number. You can activate it when you need it instead of having to get a brand-new phone number. You can have a custom voice message for anyone who calls your parked number."
        },
        {
            title: "Toll-Free numbers: ",
            content: ""
        },
        {
            title: "International Forwarding: ",
            content: "You can forward calls to international numbers in over 58 included countries."
        },
        {
            title: "Local Phone Numbers: ",
            content: "You can provide a local feel that toll-free numbers cannot provide. Whatever your application, NumberBarn provides the integration of local numbers into your everyday life."
        }
    ]

    return items;
}