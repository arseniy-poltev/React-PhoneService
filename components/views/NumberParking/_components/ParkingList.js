import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withTranslation } from '@/i18n'
import parse from 'html-react-parser';

const ParkingList = (props) => {
    return (
        <section className="services-section ptb-100 gray-light-bg">
            <div className="container">

                <div className="row justify-content-center ">
                    {
                        props.t("parkingItems", { returnObjects: true }).map((item, index) => (
                            <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
                                <div
                                    className="services-single text-center p-4 my-md-3 my-lg-3 my-sm-0 shadow-lg white-bg rounded service-item">
                                    <span className={`icon-md color-${item.iconColor} d-block mb-4 far `}>
                                        <FontAwesomeIcon icon={['fas', item.icon]} size="sm" />
                                    </span>
                                    {
                                        item.item.map((pList, index) => {
                                            return (
                                                <div key={index}>
                                                    <h5>{pList.title}</h5>
                                                    <h6 className="mb-3">{pList.content}</h6>
                                                </div>
                                            )
                                        })
                                    }

                                </div>
                                <style jsx>{`
                                        .service-item {
                                            min-height: 425px;
                                        }
                                    `}
                                </style>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default withTranslation("numberParking")(ParkingList);