import { v4 as uuid } from "uuid";

export const createService = (t: any) => ({
  brows: [
    {
      id: uuid(),
      title: t("pages.servicesPage.servicesCard.browCorrection"),
      price: 17,
      description: t("pages.servicesPage.servicesCard.browCorrectionDesc"),
      availableTime: [
        new Date(2022, 9, 15, 12, 0),
        new Date(2022, 9, 15, 14, 0),
        new Date(2022, 9, 15, 16, 0),
        new Date(2022, 9, 15, 18, 0),
      ],
    },
    {
      id: uuid(),
      title: t("pages.servicesPage.servicesCard.browTinting"),
      price: 25,
      description: t("pages.servicesPage.servicesCard.browTintingDesc"),
      availableTime: [
        new Date(2022, 9, 15, 12, 0),
        new Date(2022, 9, 15, 14, 0),
        new Date(2022, 9, 15, 16, 0),
        new Date(2022, 9, 15, 12, 0),
      ],
    },
    {
      id: uuid(),
      title: t("pages.servicesPage.servicesCard.longTermStylingAndCorrection"),
      price: 27,
      description: t(
        "pages.servicesPage.servicesCard.longTermStylingAndCorrectionDesc"
      ),
      availableTime: [
        new Date(2022, 9, 15, 12, 0),
        new Date(2022, 9, 15, 14, 0),
        new Date(2022, 9, 15, 16, 0),
      ],
    },
    {
      id: uuid(),
      title: t("pages.servicesPage.servicesCard.longTermStylingAndTinting"),
      price: 30,
      description: t(
        "pages.servicesPage.servicesCard.longTermStylingAndTintingDesc"
      ),
      availableTime: [
        new Date(2022, 9, 15, 12, 0),
        new Date(2022, 9, 15, 14, 0),
        new Date(2022, 9, 15, 16, 0),
      ],
    },
  ],
  eyelashes: [
    {
      id: uuid(),
      title: t("pages.servicesPage.servicesCard.lashesLamination"),
      price: 40,
      description: "Коррекция проводится с ипользованием пинцета и воска.",
      availableTime: [
        new Date(2022, 9, 15, 12, 0),
        new Date(2022, 9, 15, 14, 0),
        new Date(2022, 9, 15, 16, 0),
        new Date(2022, 9, 15, 18, 0),
      ],
    },
  ],
});
