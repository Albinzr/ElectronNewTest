import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import i18n from "I18n/i18n.config";
import { I18nextProvider } from "react-i18next";
import "bulma/css/bulma.css";
import axios from "axios";

const ts = () => {
  console.log("albin");

  axios
    .get("https://dummy.restapiexample.com/api/v1/employees")
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
};

ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <Suspense fallback="loading">
      <p onClick={ts}>Albin</p>
    </Suspense>
  </I18nextProvider>,
  document.getElementById("target")
);
