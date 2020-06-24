import parse from 'html-react-parser';

const Faq = (props) => {
    return (
        <section className="services-section ptb-100 gray-light-bg">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <div className="project-details-content">
                            <div className="section-heading">
                                <h2>Number Forwarding FAQs</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    {
                        props.content.map((item, index) => {
                            return (
                                <div className="col-md-12" key={index}>
                                    <div className="single-faq mt-4">
                                        <h5 className="mb-0">{parse(item.title)}</h5>
                                        <p>{parse(item.content)}</p>
                                        {
                                            item.subcontent &&
                                            item.subcontent.length > 0 &&
                                            item.subcontent.map((subItem, index) => {
                                                return (
                                                    <ul className="pl-5 faq-subitem" key={index}>
                                                        <li>{subItem.content}</li>
                                                    </ul>
                                                )
                                            })
                                        }

                                    </div>
                                    <style jsx>{`
                                        .faq-subitem {
                                            list-style-type: disc !important;
                                            padding-left:3em !important;
                                            margin-left:1em;
                                        }
                                    `}
                                    </style>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Faq;