import { withTranslation } from '@/i18n'

const PeaceOfMind = (props) => {
    return (
        <section className="promo-block ptb-100 z-index position-relative">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <div className="section-heading text-center ">
                            <h2>{props.t("peaceOfMind.title", {returnObjects: false})}</h2>
                            <p className="lead">{props.t("peaceOfMind.content", {returnObjects: false})}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default withTranslation("itService")(PeaceOfMind);