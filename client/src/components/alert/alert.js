import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Alert } from "@material-ui/lab";

const Toast = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map((alert) => (
    <Alert key={alert.id} severity="error">
      {alert.msg}
    </Alert>
  ));

Toast.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(Toast);
