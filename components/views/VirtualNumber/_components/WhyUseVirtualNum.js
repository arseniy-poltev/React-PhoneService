import parse from 'html-react-parser';
import { withTranslation } from '@/i18n'

const WhyUseVirtualNum = (props) => {
    return (
        <section className="services-section ptb-100 gray-light-bg">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <div className="project-details-content">
                            <div className="section-heading ">
                                <h2>{props.t("whyUseVirtualPhoneNum.title", {returnObjects: false})}</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center mt-5">
                    {
                        props.t("whyUseVirtualPhoneNum.items", {returnObjects: true}).map((item, index) => {
                            return (
                                <div className="col-md-12" key={index}>
                                    <div className="single-faq mt-4">
                                        <h5 className="mb-0">{parse(item.title)}</h5>
                                        <p>{parse(item.content)}</p>
                                    </div>
                                    <style jsx>{`
                                        .faq-link {
                                            color: green;
                                        }
                                    `}
                                    </style>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default withTranslation("virtualNumber")(WhyUseVirtualNum);