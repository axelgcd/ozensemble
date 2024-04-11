const { he } = require("date-fns/locale");

const MINIMUM_MOBILE_APP_VERSION = 75;

module.exports = ({ headers: { appversion, appdevice } }, res, next) => {
  if (appdevice && !appversion) return res.status(403).send({ ok: false, sendInApp: ["Veuillez mettre à jour votre application!"] });
  if (appdevice && Number(appversion) < MINIMUM_MOBILE_APP_VERSION)
    return res.status(403).send({
      ok: false,
      sendInApp: [
        "Votre application n'est pas à jour !",
        "Vous pouvez la mettre à jour en cliquant sur le lien ci-dessous",
        [{ text: "Mettre à jour", link: "https://www.ozensemble.fr" }],
        { cancelable: true },
      ],
    });
  return next();
};
