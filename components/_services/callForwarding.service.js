export const CallForwardingService = {
    getFaqItems
}

function getFaqItems() {
    const items = [
        {
            title: "What do I need to use Call Forward with Tridacom?",
            content: "You will need an existing phone service, such as your cell phone or a landline. If system will forward calls to your existing number so you won't need another cell phone, desk phone, or device. "
        },
        {
            title: "Can I purchase multiple numbers?",
            content: "You can purchase as many phone numbers as you want. Additional numbers can be added to your account within your control panel after sign up. Each number requires it's own plan."
        },
        {
            title: "If a call is connected to my number, will the next caller receive a busy signal?",
            content: "No. Your phone number can handle simultaneous phone calls to avoid busy signals, so multiple people can be calling you and sending faxes to your number at the same time."
        },
        {
            title: "Do I have to contact you to change my settings [e.g., new email address(es) for message delivery]?",
            content: "We will provide you with full control on changing settings from your account online. As soon as you update your preferences, the new settings take effect immediately."
        },
        {
            title: "How often can I change the number I forward calls to?",
            content: "You can update your forwarding number as often as you like within your account control panel 24 hours a day, 7 days a week. Changes are free and instantly activated."
        },
        {
            title: "Will callers know their call is being forwarded?",
            content: "No. Callers are seamlessly forwarded to your new number."
        },
        {
            title: "Does Tridacom forward to international numbers?",
            content: "Yes we do! We offer extensive international coverage of local, national and toll-free virtual phone numbers. Currently, we cover 78 countries and 3743 area codes worldwide, with services being delivered over Private or Public VoIP SIP Trunks, or through direct PSTN forwarding."
        },
        {
            title: 'What does "port my number" mean?',
            content: '"Porting" means transferring your existing landline or cell phone number from one telephone service provider to another.'
        },
        {
            title: "What numbers can be ported to Tridacom?",
            content: "We can port most mobile and landline phone numbers in 78 countries. "
        },
        {
            title: "Can you provide phone numbers in my area code?",
            content: "We provide phone numbers with area codes in 78 countries. For a full list of the area codes we currently offer, visit our Pricing page. If you are interested in an area code that is not presently offered, please email your request to sales@tridacom.com and we will notify you if we can obtain it or when it becomes available."
        },
    ]

    return items;
}