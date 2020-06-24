export const virtualNumberService = {
    getFaqItems
}

function getFaqItems() {

    /* 
    Faq array type: 
    {
        title: text,
        content: text
        subcontent: array
    }

    Faq content can be used as raw html or text format.
    */
    const items = [
        {
            title: "How will a virtual phone number help my small business?",
            content: "Right now, small businesses require flexibility more than ever. A virtual number will give you the agility to be on the go, and work from anywhere. With your new virtual number you no longer need to be in the office to make and receive work calls, nor make those calls from your personal phone. You can combine the flexibility of a cell phone with the professionalism of a business number wherever you are Virtual phone lines can save your business thousands of dollars in telephony and equipment charges. Because they are 100% digital, virtual phone lines require no hardware, equipment, installation or maintenance."
        },
        {
            title: "How can a local number help my business?",
            content: 'If your office is located in a different area than your customer base, you can assign a local area code to your phone line. This helps you establish a presence in a key area and lowers costs on incoming calls. Furthermore, customers are more likely to call and answer calls from a local number than they are with an area code they don\'t recognize. "[A virtual phone number] can give the impression that you have office space [anywhere]," said Charles Floate, owner of DFY Links. "This can attract or encourage business from that area." Yes! If you do not want our standard parked greeting, you can upload a custom .mp3 or .wav file, or record a message over the phone to use as your outgoing message. (Parked phone outgoing message is limited to 30 seconds)',
            subcontent: [
                {
                    content: "Any text or call you make from your phone using your virtual phone number will only show up on the customer’s phone as your business line. Your personal phone number will stay completely private so you can easily give yourself a break from work when you need one.",
                },
                {
                    content: "Calls coming into your virtual phone number will be routed directly to your business voicemail if you cannot or choose not to answer it, or if they come in outside of your set business hours.",
                },
                {
                    content: "You can easily distinguish between work calls and personal calls and choose when to answer and when to let the call go to voicemail.",
                }
            ]
        },
        {
            title: "What if I need to make an emergency call?",
            content: ""
        },
        {
            title: "Can I unpark my phone and choose to use call forwarding?",
            content: "You can absolutely update your plan at any time, we will waive the set up cost."
        },
        {
            title: "Can I port out a number to any phone?",
            content: "Mobile and VoIP numbers can be used anywhere. Landlines must be associated with a specific area code for the region it is located in."
                + "<br/><br/><span class='text-danger'>Please note: Not every phone number in your area code will work at every address in your area code. This is true of all numbers in the country. If you move outside of your “rate center”, even your current landline number would not work at your new address. It has to do with the legacy telecom switch network. VOIP and wireless carriers are not bound by these restrictions. They use the internet and cell towers, respectively, independent of the telecom switch network.</span>"
        }
    ];

    return items;
}