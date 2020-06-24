import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { withTranslation } from '@/i18n'

const FaxForwardItems = (props) => {
    return (
        <section className="services-section ptb-100 gray-light-bg">
            <div className="container">
                <div className="row justify-content-center FaxForwardItems">
                    {
                        props.t('faxForwardList', {returnObjects: true}).map((item, index) => {
                            return (
                                <div className="col-lg-3 col-md-3 col-sm-6" key={index}>
                                    <div
                                        className="services-single text-center p-4 my-md-3 my-lg-3 my-sm-0 shadow-lg gray-light-bg rounded service-item">
                                        <h5><span className="how-does-work-num mr-2">{index + 1}</span>  <span className={`icon-sm color-default far fa-arrow-right }`}></span></h5>
                                        <span className={`icon-lg color-${item.iconColor} d-block mb-4 far`}>
                                            <FontAwesomeIcon icon={['fas', item.icon]}  />
                                        </span>
                                        <h5>{item.title}</h5>
                                        <h6 className="mb-0">{item.content}</h6>
                                    </div>
                                    <style jsx>{`
                                        .service-item {
                                            min-height: 350px;
                                        }
                                        .how-does-work-num {
                                            font-size: 30px;
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

export default withTranslation("faxForwarding")(FaxForwardItems);