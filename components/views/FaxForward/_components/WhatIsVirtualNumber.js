import { withTranslation } from '@/i18n'
import parse from 'html-react-parser';

const WhatIsVirtualNumber = (props) => {
    return (
        <section className="services-section ptb-100 white-bg">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <div className="project-details-content">
                            <div className="section-heading">
                                <h2>{props.t("whatIsVirtualFaxNum.title", {returnObjects: false})}</h2>
                                <p>{parse(props.t("whatIsVirtualFaxNum", {returnObjects: false}))}</p>
                                <ul className="list-unstyled tech-feature-list">
                                    {
                                        props.t("whatIsVirtualFaxNum.items", {returnObjects: true}).map((item, index) => {
                                            return (
                                                <li className="py-1" key={index}><span
                                                    className="ti-check-box mr-2 color-secondary"></span><strong>{item.content}</strong>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default withTranslation('faxForwarding')(WhatIsVirtualNumber);