export const AffiliateService = {
    getFaqItem
}

function getFaqItem() {
    const items = [
        {
            title: "What is the Affiliate Program?",
            content: "Affiliates are partners that refer customers to Tridacom via an affiliate link or banner. For every paying customer that is referred to us, we pay a 20% commission that will continue for as long as their contract with us does."
        },
        {
            title: "How do I earn Commissions?",
            content: "Once you have registered as a Tridacom affiliate, you can begin earning commissions immediately. Simply share your Tridacom affiliate link on your blog, website, newsletter, or anywhere your customers will see it. Once your visitors click the link, you’ll earn cash on every sale made via your ads."
        },
        {
            title: "Is the commission one-time or is it a recurring commission?",
            content: "It is recurring commission."
        },
        {
            title: "When do the payouts occur(what's the waiting period)? ",
            content: "We will pay on the first of every month and we make the payment via PayPal only."
        },
        {
            title: "What is the minimum payout amount?",
            content: "There is no minimum payout amount. Whatever your amount, we will pay via PayPal."
        },
        {
            title: "How much can I earn?",
            content: "As an affiliate partner, you earn a minimum 20% for every paying customer and there is no limit to how many customers you can refer to Tridacom. "
        },
        {
            title: "Can I create custom links to different pages on your site?",
            content: "Yes! A blog post is a great example: you can create custom links to different pages on our site then add your affiliate URL parameters to the end of the URL (https://yoursite.com/blogpost?my-affiliate-id-code-here)"
        },
    ]

    return items;
}