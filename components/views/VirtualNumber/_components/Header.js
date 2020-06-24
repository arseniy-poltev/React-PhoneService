import { withTranslation } from '@/i18n'
const VirtualNumberHeader = (props) => {
    return (
        <section className="project-details-section ptb-100">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-md-12 col-lg-6">
                        <div className="img-wrap mb-md-4 mb-lg-0">
                            <img src="/img/virtualNumber_1.jpg" alt="project" className="img-fluid rounded shadow-sm" />
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-6 d-flex">
                        <div className="project-details-feature justify-content-center align-self-center">
                            <ul className="list-unstyled tech-feature-list">
                                {props.t("header", { returnObjects: true }).map((item, index) => (
                                    <li className="py-2" key={index}><strong>{item.title}  </strong>
                                        {item.content}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center mt-5">
                    <div className="col-md-12">
                        <div className="project-details-content">
                            <div className="section-heading mb-5">
                                <h2>{props.t("WhatIsVirtualNumber.title", { returnObjects: false })}</h2>
                            </div>
                            <p>{props.t("WhatIsVirtualNumber.description", { returnObjects: false })}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default withTranslation("virtualNumber")(VirtualNumberHeader);