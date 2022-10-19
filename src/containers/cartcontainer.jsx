import Cart from "../components/Cart";
import { connect } from "react-redux";
import atc from "../services/action/action";

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => (
    {
        addCartHandler: data => dispatch(atc(data))
    }
)

export default connect(mapDispatchToProps, mapDispatchToProps)(Cart)